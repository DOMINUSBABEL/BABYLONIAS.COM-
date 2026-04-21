import { Component, ChangeDetectionStrategy, inject, AfterViewInit, ElementRef, viewChildren } from '@angular/core';
import { I18nService } from '../i18n.service';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-tech',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section #animateSection class="opacity-0 flex flex-col gap-8 relative overflow-hidden bg-white/[0.02] p-10 md:p-14 rounded-3xl border border-white/5 max-w-4xl mx-auto mt-10 hover:shadow-[0_15px_40px_rgba(56,189,248,0.05)] hover:border-[#38BDF8]/20 transition-all group">
      <div class="absolute -right-10 -bottom-10 w-96 h-96 border-[1px] border-[#38BDF8]/20 rounded-full blur-xl group-hover:bg-[#38BDF8]/5 transition-all duration-700"></div>
      <div class="absolute -right-32 -top-10 w-96 h-96 border-[1px] border-[#38BDF8]/10 rounded-full group-hover:scale-105 transition-transform duration-700"></div>
      
      <h2 class="text-sm font-semibold tracking-widest uppercase text-tech mb-6 sec-stagger opacity-0 relative z-10">{{ t().nucleus }}</h2>
      <div class="mb-10 sec-stagger opacity-0 relative z-10">
        <div class="text-sm opacity-40 mb-3 font-mono uppercase">{{ t().platform }}</div>
        <div class="text-5xl md:text-7xl font-black tracking-tight text-white/90 drop-shadow-2xl">AGENTS<span class="text-tech drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">.AI</span></div>
      </div>
      <p class="text-lg md:text-xl opacity-80 leading-relaxed mb-10 italic sec-stagger opacity-0 border-l-2 px-6 border-[#38BDF8]/50 relative z-10 text-white font-light">"{{ t().agentsQuote }}"</p>
      
      <div class="space-y-6 sec-stagger opacity-0 relative z-10 mt-auto">
        <div class="flex justify-between items-end border-b border-white/10 pb-3 hover:border-[#38BDF8]/50 hover:pl-2 transition-all duration-300">
          <span class="text-sm opacity-50 uppercase tracking-wider">{{ t().architecture }}</span>
          <span class="text-lg font-medium tracking-tight text-white">DOMINUSBABEL</span>
        </div>
        <div class="flex justify-between items-end border-b border-white/10 pb-3 hover:border-[#38BDF8]/50 hover:pl-2 transition-all duration-300">
          <span class="text-sm opacity-50 uppercase tracking-wider">{{ t().protocol }}</span>
          <span class="text-lg font-medium tracking-tight text-white">LLM/RLM Proprietary</span>
        </div>
        <div class="flex justify-between items-end border-b border-white/10 pb-3 hover:border-[#38BDF8]/50 hover:pl-2 transition-all duration-300">
          <span class="text-sm opacity-50 uppercase tracking-wider">{{ t().revenue }}</span>
          <span class="text-lg font-medium tracking-tight text-tech drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">{{ t().revSaaS }}</span>
        </div>
      </div>
    </section>
  `
})
export class TechComponent implements AfterViewInit {
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
