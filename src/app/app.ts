import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService, Lang } from './i18n.service';
import { animate } from 'motion';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private i18n = inject(I18nService);
  t = this.i18n.t;
  lang = this.i18n.lang;

  setLang(l: Lang) {
    this.i18n.setLang(l);
    setTimeout(() => {
      animate('.lang-update-fx', { opacity: [0.5, 1], filter: ['blur(4px)', 'blur(0px)'] }, { duration: 0.4 });
    }, 50);
  }
}

