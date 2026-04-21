import { Component, ChangeDetectionStrategy, inject, AfterViewInit, ElementRef, viewChildren } from '@angular/core';
import { I18nService } from '../i18n.service';
import { animate, stagger, inView } from 'motion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col md:flex-row justify-between items-start pt-10 gap-8 lang-update-fx">
      <div class="flex flex-col hero-stagger opacity-0">
        <div class="flex items-center gap-2 mb-3">
          <span class="status-dot"></span>
          <span class="text-[10px] tracking-[0.3em] font-mono text-white/50">{{ t().proj_id }}</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-white/90 drop-shadow-2xl">BABYLON<span class="text-tech drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">.IA</span></h1>
        <p class="text-sm md:text-base opacity-60 tracking-[0.2em] uppercase mt-4 max-w-xl">{{ t().subtitle }}</p>
        
        <div class="mt-12 flex flex-wrap gap-4">
            <a routerLink="/thesis" class="px-6 py-3 border border-white/20 hover:border-tech hover:text-tech text-sm tracking-widest uppercase transition-all duration-300 rounded-sm bg-white/5 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:-translate-y-1">Conocer la Tesis</a>
            <a routerLink="/services" class="px-6 py-3 border border-transparent hover:border-white/20 text-sm tracking-widest uppercase transition-all duration-300 rounded-sm hover:-translate-y-1 hover:bg-white/5">Ver Servicios</a>
        </div>
      </div>
      <div class="text-left md:text-right hero-stagger opacity-0 relative">
        <div class="absolute -inset-4 bg-[#38BDF8]/5 blur-2xl rounded-full"></div>
        <div class="inline-block px-4 py-1.5 border border-subtle rounded text-[10px] tracking-widest text-tech mb-3 bg-[#38BDF8]/5 shadow-[0_0_15px_rgba(56,189,248,0.15)] relative z-10 font-bold">{{ t().confidential }}</div>
        <div class="text-[10px] md:text-xs opacity-40 uppercase font-mono">{{ t().prepared }}</div>
      </div>
    </div>
  `
})
export class HomeComponent implements AfterViewInit {
  private i18n = inject(I18nService);
  t = this.i18n.t;

  ngAfterViewInit() {
     setTimeout(() => {
        animate('.hero-stagger', 
          { opacity: [0, 1], y: [20, 0] }, 
          { delay: stagger(0.1), duration: 0.8, ease: "easeOut" }
        );
     }, 100);
  }
}
