import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './_components/header/header';
import { Hero } from './_components/hero/hero';
import { WelcomeMessage } from './_components/welcome-message/welcome-message';
import { CategoryCards } from './_components/category-cards/category-cards';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, WelcomeMessage, CategoryCards],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cardapio-doceria-naoresisti');
}
