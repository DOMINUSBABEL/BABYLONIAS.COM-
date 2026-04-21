import { Component, ChangeDetectionStrategy, inject, AfterViewInit, ElementRef, viewChildren } from '@angular/core';
import { I18nService } from '../i18n.service';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-hub',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section #animateSection class="opacity-0 grid grid-cols-1 md:grid-cols-12 gap-12 mt-10 max-w-6xl mx-auto">
      <div class="md:col-span-12 flex flex-col justify-center border-l-2 border-[#38BDF8] pl-8 py-4 sec-stagger opacity-0 mb-6 group">
        <h2 class="text-sm font-semibold tracking-widest uppercase opacity-50 mb-4 text-white group-hover:text-tech transition-colors">{{ t().hub }}</h2>
        <p class="text-3xl md:text-4xl font-light leading-snug text-white/90 drop-shadow-lg">{{ t().hubDesc }}</p>
      </div>

      <div class="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 sec-stagger opacity-0 relative">
        <div class="absolute inset-0 bg-[#38BDF8]/5 blur-3xl rounded-full scale-75 opacity-50 pointer-events-none"></div>
        <!-- China -->
        <div class="flex flex-col items-center text-center gap-6 bg-white/[0.03] p-12 rounded-3xl border border-white/5 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/[0.02] group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)] hover:-translate-y-2">
          <div class="w-24 h-24 shrink-0 rounded-full border-2 border-[#38BDF8]/50 flex items-center justify-center text-tech text-3xl font-bold bg-[#38BDF8]/10 group-hover:bg-[#38BDF8]/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]">CN</div>
          <div class="flex flex-col gap-3">
            <div class="text-2xl md:text-3xl font-bold tracking-wide text-white group-hover:text-tech transition-colors">{{ t().china }}</div>
            <div class="text-base text-white/50 leading-relaxed font-light">{{ t().chinaDesc }}</div>
          </div>
        </div>
        <!-- Colombia -->
        <div class="flex flex-col items-center text-center gap-6 bg-white/[0.03] p-12 rounded-3xl border border-white/5 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/[0.02] group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)] hover:-translate-y-2">
          <div class="w-24 h-24 shrink-0 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-3xl font-bold bg-white/5 group-hover:border-[#38BDF8]/50 group-hover:text-tech group-hover:bg-[#38BDF8]/10 group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]">CO</div>
          <div class="flex flex-col gap-3">
            <div class="text-2xl md:text-3xl font-bold tracking-wide text-white group-hover:text-tech transition-colors">{{ t().colombia }}</div>
            <div class="text-base text-white/50 leading-relaxed font-light">{{ t().colombiaDesc }}</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HubComponent implements AfterViewInit {
  private i18n = inject(I18nService);
  t = this.i18n.t;
  sections = viewChildren<ElementRef>('animateSection');

  ngAfterViewInit() {
    this.sections().forEach(sec => {
        inView(sec.nativeElement, () => {
           animate(sec.nativeElement, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8, ease: "easeOut" });
           const items = sec.nativeElement.querySelectorAll('.sec-stagger');
           if (items.length) {
              animate(items, { opacity: [0, 1], y: [20, 0] }, { delay: stagger(0.15), duration: 0.6, ease: "easeOut" });
           }
        }, { margin: "-100px" });
    });
  }
}
