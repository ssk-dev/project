import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ColorSchemasEnum, ColorSchemaService} from "./components/partials/color-schema/color-schema.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private colorSchemaService: ColorSchemaService, private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.colorSchemaService.colorSchema$.subscribe((color_schema) => this.setColorSchemaToHost(color_schema));
  }

  setColorSchemaToHost(color_schema: ColorSchemasEnum) {
    this.renderer.setAttribute(this.element.nativeElement, 'color-schema', color_schema)
  }
}
