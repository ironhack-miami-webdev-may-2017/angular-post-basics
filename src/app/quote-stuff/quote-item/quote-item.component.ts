import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter  // needed to make "Output" work
} from '@angular/core';

@Component({
  selector: 'quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  // "quoteInfo" will be set by the parent when the component is displayed
  // (kind of like the parameters of a function)
  @Input() quoteInfo: any;
    //                 |
    //                 ------------------------ the type of the data that
    //                                        | is sent to the parent
  @Output() onQuoteDelete = new EventEmitter<any>();
  //             |
  //     the name of the "event" that the parent needs to know about
  // creates an "event" that a parent can choose to be notified of

  constructor() { }

  ngOnInit() {
  }

  tellParentToDeleteThis() {
    // "tellParentToDeleteThis()" is called when the button is clicked

    // when the button is clicked, notify parents.
      // emit is the thing that notifies parents
    this.onQuoteDelete.emit(this.quoteInfo);
                      //           |
                      // the information we are sending to the parent
  }
}
