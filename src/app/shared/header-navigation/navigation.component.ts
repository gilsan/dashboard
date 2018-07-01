import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
    name: string;
    constructor(
      private modalService: NgbModal,
      private router: Router
    ) {

    }

    logout() {
       this.router.navigate(['login']);
    }

    ngAfterViewInit() {

        const set = function() {
            const width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            const topOffset = 0;
            if (width < 1170) {

                $('#main-wrapper').addClass('mini-sidebar');
            } else {
                $('#main-wrapper').removeClass('mini-sidebar');
            }
        };
        $(window).ready(set);
        $(window).on('resize', set);


        $('.search-box a, .search-box .app-search .srh-btn').on('click', function () {
            $('.app-search').toggle(200);
        });


        $('body').trigger('resize');
    }
}
