import { Component, ChangeDetectionStrategy, inject, AfterViewInit, ElementRef, viewChildren } from '@angular/core';
import { I18nService } from '../i18n.service';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-consulting',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section #animateSection class="opacity-0 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-5xl mx-auto">
      <!-- ACERVIX -->
      <div class="sec-stagger opacity-0 p-10 rounded-3xl bg-gradient-to-br from-[#38BDF8]/[0.05] flex flex-col justify-center to-transparent border border-[#38BDF8]/10 hover:border-[#38BDF8]/30 transition-all duration-500 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)]">
        <div class="absolute -left-20 -top-20 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl group-hover:bg-[#38BDF8]/20 group-hover:scale-150 transition-all duration-700"></div>
        <div class="text-sm tracking-[0.3em] font-bold text-tech uppercase mb-6 relative z-10 drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]">{{ t().acervix }}</div>
        <p class="text-lg md:text-xl opacity-90 leading-relaxed font-light relative z-10">{{ t().acervixDesc }}</p>
      </div>

      <!-- Leadership -->
      <div class="sec-stagger opacity-0 p-10 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-center shadow-lg hover:bg-white/[0.03] transition-colors relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl"></div>
        <div class="text-xs tracking-widest opacity-40 uppercase mb-8 border-b-2 border-white/10 inline-block pb-2 relative z-10">{{ t().leadership }}</div>
        <div class="flex flex-col gap-8 relative z-10">
          <div class="flex flex-col border-l-2 border-[#38BDF8]/50 pl-6 hover:border-[#38BDF8] hover:pl-8 transition-all duration-300">
            <span class="text-2xl font-bold tracking-wide text-white drop-shadow-md">{{ t().ceo }}</span>
            <span class="text-tech/80 text-xs font-mono uppercase tracking-wider mt-2">{{ t().ceoRole }}</span>
          </div>
          <div class="flex flex-col border-l-2 border-[#38BDF8]/50 pl-6 hover:border-[#38BDF8] hover:pl-8 transition-all duration-300">
            <span class="text-2xl font-bold tracking-wide text-white drop-shadow-md">{{ t().cto }}</span>
            <span class="text-tech/80 text-xs font-mono uppercase tracking-wider mt-2">{{ t().ctoRole }}</span>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ConsultingComponent implements AfterViewInit {
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
