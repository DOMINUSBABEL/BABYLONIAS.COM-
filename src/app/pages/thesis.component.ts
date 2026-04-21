import { Component, ChangeDetectionStrategy, inject, AfterViewInit, ElementRef, viewChildren } from '@angular/core';
import { I18nService } from '../i18n.service';
import { animate, stagger, inView } from 'motion';

@Component({
  selector: 'app-thesis',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section #animateSection class="opacity-0 flex flex-col gap-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl hover:bg-white/[0.04] transition-all max-w-4xl mx-auto mt-10 hover:shadow-[0_15px_40px_rgba(56,189,248,0.05)] hover:border-[#38BDF8]/20 group">
      <div class="border-l-2 border-[#38BDF8] pl-8 py-4 sec-stagger opacity-0 relative">
        <div class="absolute -left-[3px] top-1/2 -translate-y-1/2 w-1.5 h-12 bg-[#38BDF8] rounded-full shadow-[0_0_15px_rgba(56,189,248,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h2 class="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-tech mb-4">{{ t().thesis }}</h2>
        <p class="text-3xl md:text-4xl font-light leading-tight mb-8">{{ t().thesisDesc }} <br/><span class="text-white font-normal">{{ t().thesisChinaLatam }}</span></p>
        <ul class="space-y-6 text-base md:text-lg opacity-70">
          <li class="flex items-center gap-4"><span class="text-tech text-xl drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">▹</span> {{ t().t1 }}</li>
          <li class="flex items-center gap-4"><span class="text-tech text-xl drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">▹</span> {{ t().t2 }}</li>
          <li class="flex items-center gap-4"><span class="text-tech text-xl drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">▹</span> {{ t().t3 }}</li>
        </ul>
      </div>
    </section>
  `
})
export class ThesisComponent implements AfterViewInit {
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
