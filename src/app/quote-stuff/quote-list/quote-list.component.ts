import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  allTheQuotes: object[] = [
    {
      text: 'You Can Discover Everything You Need To Know About Everything By Looking At Your Hands',
      author: 'Jayden Smith'
    },
    {
      text: 'Anyone who has never made a mistake has never tried anything new.',
      author: 'Albert Einstein'
    },
    {
      text: 'If A Book Store Never Runs Out Of A Certain Book, Dose Than Mean That Nobody Reads It, Or Everybody Reads It',
      author: 'Jayden Smith'
    },
    {
      text: 'How Can Mirrors Be Real If Our Eyes Aren\'t Real',
      author: 'Jayden Smith'
    },
    {
      text: 'If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth',
      author: 'Jayden Smith'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  doSomething(theQuote) {
    const quoteIndex = this.allTheQuotes.indexOf(theQuote);
    this.allTheQuotes.splice(quoteIndex, 1);
  }
}
