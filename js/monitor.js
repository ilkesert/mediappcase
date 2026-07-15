// ═══════════════════════════════════════════
// REAL-TIME BEDSIDE MONITOR WAVEFORM SIMULATOR (CANVAS)
// ═══════════════════════════════════════════

class BedsideMonitor {
  constructor(ecgCanvasId, spo2CanvasId) {
    this.ecgCanvas = document.getElementById(ecgCanvasId);
    this.spo2Canvas = document.getElementById(spo2CanvasId);
    
    if (!this.ecgCanvas || !this.spo2Canvas) return;

    this.ecgCtx = this.ecgCanvas.getContext('2d');
    this.spo2Ctx = this.spo2Canvas.getContext('2d');

    this.width = this.ecgCanvas.offsetWidth;
    this.height = this.ecgCanvas.offsetHeight;

    // Set high-res canvas scale
    this.ecgCanvas.width = this.width;
    this.ecgCanvas.height = this.height;
    this.spo2Canvas.width = this.width;
    this.spo2Canvas.height = this.height;

    this.x = 0;
    this.speed = 1.8; // px per frame
    
    // Waveform drawing properties
    this.ecgBuffer = new Array(this.width).fill(this.height / 2);
    this.spo2Buffer = new Array(this.width).fill(this.height / 2);

    this.heartRate = 75;
    this.ecgType = "normal"; // normal, afib, st_elevation, st_depression, tachycardia, bradycardia, ventricular_tachycardia
    
    this.animationId = null;
    this.isPlaying = false;
    
    // Time variables for wave cycle generation
    this.ecgCycleProgress = 0;
    this.spo2CycleProgress = 0;
  }

  setVitals(hr, ecgType) {
    this.heartRate = hr;
    this.ecgType = ecgType || "normal";
  }

  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.animate();
  }

  stop() {
    this.isPlaying = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  animate() {
    if (!this.isPlaying) return;

    this.drawCycle();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  drawCycle() {
    // Determine cycle length in pixels based on heart rate
    // E.g., at 60 FPS, 60 BPM is 1 beat per second (60 frames per beat)
    // Frame count per beat = 3600 / heartRate
    const framesPerBeat = Math.max(15, 3600 / this.heartRate);
    
    // Calculate how much we progress in this single frame
    const increment = 1 / framesPerBeat;
    this.ecgCycleProgress += increment;
    this.spo2CycleProgress += increment;

    if (this.ecgCycleProgress >= 1) {
      this.ecgCycleProgress = 0;
      // Handle heart beat trigger (optional sound bip can go here)
      this.triggerBeatSound();
    }
    if (this.spo2CycleProgress >= 1) {
      this.spo2CycleProgress = 0;
    }

    // Generate current wave amplitude values
    const ecgAmp = this.getEcgValue(this.ecgCycleProgress);
    const spo2Amp = this.getSpo2Value(this.spo2CycleProgress);

    // Save to scrolling buffer
    this.ecgBuffer[this.x] = ecgAmp;
    this.spo2Buffer[this.x] = spo2Amp;

    // Render Canvas
    this.renderCanvas(this.ecgCtx, this.ecgBuffer, "#10b981", this.ecgCanvas.width, this.ecgCanvas.height);
    this.renderCanvas(this.spo2Ctx, this.spo2Buffer, "#06b6d4", this.spo2Canvas.width, this.spo2Canvas.height);

    // Advance horizontal scan position
    this.x = (this.x + 1) % this.width;
  }

  renderCanvas(ctx, buffer, color, w, h) {
    ctx.clearRect(0, 0, w, h);

    // Grid lines behind the waveforms
    ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    ctx.lineWidth = 1;
    for (let i = 0; i < w; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
      ctx.stroke();
    }
    for (let i = 0; i < h; i += 20) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i);
      ctx.stroke();
    }

    // Draw main waveform
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 4;
    ctx.shadowColor = color;
    ctx.beginPath();

    const scanGap = 30; // Pixel gap for scanning cursor feel

    for (let i = 0; i < w; i++) {
      // Create trailing fading edge where the scanning head is
      const distance = (i - this.x + w) % w;
      if (distance > w - scanGap) continue; // Don't draw the scan gap

      const yVal = buffer[i];
      if (i === 0 || distance === w - scanGap - 1) {
        ctx.moveTo(i, yVal);
      } else {
        ctx.lineTo(i, yVal);
      }
    }
    ctx.stroke();
    ctx.shadowBlur = 0; // reset shadow

    // Drawing scanning dot head
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.beginPath();
    ctx.arc(this.x, buffer[this.x], 4, 0, 2 * Math.PI);
    ctx.fill();
  }

  getEcgValue(progress) {
    const baseline = this.height / 2;
    
    // Normal sinus ECG waveform simulation
    // P wave, QRS complex, T wave
    let y = 0;

    // ECG Types: "st_elevation", "st_depression", "afib", "ventricular_tachycardia", "normal"
    if (this.ecgType === "ventricular_tachycardia") {
      // Wide complex regular sinusoide
      return baseline + Math.sin(progress * Math.PI * 4) * 20 + (Math.random() * 2 - 1);
    }

    if (this.ecgType === "afib") {
      // Fibrillation baseline + irregular QRS
      const noise = (Math.random() * 4 - 2);
      let qrs = 0;
      // We randomly trigger QRS or simulate irregular cycle
      const rTrigger = 0.1 + Math.sin(Date.now() / 200) * 0.05;
      if (progress > rTrigger && progress < rTrigger + 0.05) {
        const p = (progress - rTrigger) / 0.05;
        qrs = Math.sin(p * Math.PI * 2) * -32;
      }
      return baseline + qrs + noise;
    }

    // Standard wave builder (P, QRS, ST segment, T)
    // 0.0 - 0.15: P wave
    if (progress < 0.15) {
      y = Math.sin((progress / 0.15) * Math.PI) * -3; // small P wave
    }
    // 0.15 - 0.18: PR segment (flat)
    // 0.18 - 0.20: Q wave (down)
    else if (progress >= 0.18 && progress < 0.20) {
      y = ((progress - 0.18) / 0.02) * 5;
    }
    // 0.20 - 0.24: R wave (huge sharp spike up)
    else if (progress >= 0.20 && progress < 0.24) {
      const p = (progress - 0.20) / 0.04;
      y = -35 * Math.sin(p * Math.PI);
    }
    // 0.24 - 0.26: S wave (down)
    else if (progress >= 0.26 && progress < 0.28) {
      y = ((0.28 - progress) / 0.02) * 8;
    }
    // 0.28 - 0.40: ST segment
    else if (progress >= 0.28 && progress < 0.45) {
      if (this.ecgType === "st_elevation") {
        y = -10; // ST elevation!
      } else if (this.ecgType === "st_depression") {
        y = 5; // ST depression!
      } else {
        y = 0; // Flat iso-electric line
      }
    }
    // 0.45 - 0.65: T wave (broader up)
    else if (progress >= 0.45 && progress < 0.65) {
      y = Math.sin(((progress - 0.45) / 0.20) * Math.PI) * -6;
    }

    return baseline + y;
  }

  getSpo2Value(progress) {
    const baseline = this.height / 2;
    // Standard photoplethysmogram (PPG) waveform: sharp rise, dicrotic notch, slow decay
    let y = 0;
    
    if (progress < 0.25) {
      // Rapid systolic rise
      y = Math.sin((progress / 0.25) * (Math.PI / 2)) * -20;
    } else if (progress >= 0.25 && progress < 0.40) {
      // Dicrotic notch valley
      const p = (progress - 0.25) / 0.15;
      y = -20 + Math.sin(p * Math.PI) * 8;
    } else if (progress >= 0.40 && progress < 0.50) {
      // Dicrotic peak
      const p = (progress - 0.40) / 0.10;
      y = -12 - Math.sin(p * Math.PI) * 3;
    } else {
      // Diastolic runoff decay
      const p = (progress - 0.50) / 0.50;
      y = -12 + p * 12;
    }

    // Scale wave amplitude slightly based on patient condition (e.g. hypoxic wave is smaller)
    return baseline + y;
  }

  triggerBeatSound() {
    // Optional bip audio can be generated here using Web Audio API
    if (window.AudioContext || window.webkitAudioContext) {
      try {
        if (!this.audioCtx) {
          this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Only bip if volume is not muted and audio context is running
        if (this.audioCtx.state === 'suspended') {
          // Attempting to resume on user gesture
          return;
        }

        const osc = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();

        osc.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        // Standard ECG bip frequency (normal is 440Hz, panic is higher 600Hz)
        osc.frequency.setValueAtTime(this.heartRate > 120 ? 580 : 440, this.audioCtx.currentTime);
        
        // Very short bip
        gainNode.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.08);

        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.08);
      } catch (e) {
        // Audio block by browser policy or unsupported
      }
    }
  }
}
