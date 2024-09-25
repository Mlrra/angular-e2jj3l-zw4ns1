import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  public title: string = 'Change Me!';
  public isBold: boolean = false;
  public isItalic: boolean = false;
  public isGreen: boolean = false;
  public withBg: boolean = false;
  public iswithStyleBind: boolean = true;
  public messages: any;

  public styleA: any = {
    fontSize: '50px',
    textAlign: 'center',
    padding: '20px',
    textTransform: 'uppercase',
    textDecoration: 'underline',
  };
  public styleB: any = {};

  public bg: any = {
    withBackground: this.withBg,
  };

  public classes: any = {
    bold: this.isBold,
    italic: this.isItalic,
    green: this.isGreen,
  };

  public toggleBold() {
    this.isBold ? (this.isBold = false) : (this.isBold = true);
    this.update();
  }

  public toggleItalic() {
    this.isItalic = !this.isItalic;
    this.update();
  }

  public toggleRed() {
    this.isGreen = !this.isGreen;
    this.update();
  }

  public toggleBg() {
    this.withBg = !this.withBg;
    this.update();
  }

  public toggleStyleBinding() {
    this.iswithStyleBind = !this.iswithStyleBind;
    this.update();
  }

  private update() {
    this.classes = {
      bold: this.isBold,
      italic: this.isItalic,
      green: this.isGreen,
    };
    this.bg = { withBackground: this.withBg };
  }

  public popup(inputContent: any) {
    this.messages = '${inputContent}! Charot! The value of your textbox is "${this.title}"';
  }

  ngOnInit(): void {}
}