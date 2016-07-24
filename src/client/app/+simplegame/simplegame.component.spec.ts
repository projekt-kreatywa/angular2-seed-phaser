import { Component } from '@angular/core';
import { TestComponentBuilder } from '@angular/compiler/testing';
import {
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { SimpleGameComponent } from './simplegame.component';

export function main() {
  describe('SimpleGame component', () => {

    it('should work',
      inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.createAsync(TestComponent)
          .then((rootTC: any) => {
            rootTC.detectChanges();
            let homeDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(getDOM().querySelectorAll(homeDOMEl, '#simplegame-content').length).toEqual(1);
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-simplegame></sd-simplegame>',
  directives: [SimpleGameComponent]
})
class TestComponent {}
