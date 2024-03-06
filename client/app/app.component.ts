import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from 'env.angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="app">
      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'InstaShop';
}
