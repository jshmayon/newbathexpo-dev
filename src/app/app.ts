import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Services } from './shared/services/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Services],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
