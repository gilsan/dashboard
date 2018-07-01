import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})

export class GridComponent implements OnInit {
  // @Input() gridData: any;
  gridData: any;

  trustUrl: SafeUrl;
   url = 'http://221.141.251.58/freejqgrid/grid.php';
   editurl = 'http://221.141.251.58/freejqgrid/gridedit.php';
  constructor(private _sanitizer: DomSanitizer) {

     this.trustUrl = this._sanitizer.bypassSecurityTrustUrl(this.url);
  }

  ngOnInit() {
    this.gridData = [
      {'id': 1 + '', 'userId': 'U001', 'userName': 'Jon Snow', 'status': 'active', 'closed': false},
      {'id': 2 + '', 'userId': 'U002', 'userName': 'Theon Greyjoy', 'status': 'inactive', 'closed': true},
      {'id': 3 + '', 'userId': 'U003', 'userName': 'Jon Snow', 'status': 'active', 'closed': false},
      {'id': 4 + '', 'userId': 'U004', 'userName': 'Theon Greyjoy', 'status': 'inactive', 'closed': true}
    ];
    this.displayUserGrid(this.gridData);
  }

  displayUserGrid(currentGridData) {

    if (!this.gridData) {
      return false;
    }
    $.jgrid.nav.addtext = '추가';
    $.jgrid.nav.edittext = '편집';
    $.jgrid.nav.deltext = '삭제';
    $.jgrid.nav.searchtext = '찿기';
    $(document).ready(() => {

      $(() => {
        'use strict';
        const $grid = $('#listGrid');
        $grid.jqGrid({
         // data: currentGridData,
         url: this.url,
         datatype: 'json',
          multiselect: true,
          height: 550,
          colNames: ['USER ID', 'USERNAME', 'STATUS', 'ID', 'ACTIONS'],
          colModel: [
            {
              name: 'userId', align: 'center', autoResizing: {minColWidth: 80}, sortable: true,
              search: true,
              edittype: 'text',
              stype: 'text', searchoptions: {sopt: ['eq', 'ne']}
            },
            {
              name: 'userName', align: 'center', autoResizing: {minColWidth: 80}, sortable: true,
              search: true,
              edittype: 'text',
              stype: 'text', searchoptions: {sopt: ['eq', 'ne']}
            },
            {
              name: 'status', align: 'center', autoResizing: {minColWidth: 80}, sortable: true,
              search: true,
              edittype: 'select', editoptions: {
                generateValue: false,
                defaultValue: 'active',
                value: 'active:Active;inactive:In-Active'
              },
              stype: 'select', searchoptions: {sopt: ['eq', 'ne'], value: 'active:Active;inactive:In-Active'}
            },
            {name: 'id', editrules: {edithidden: false}, editable: false, hidden: false},
            {
              name: 'act', template: 'actions', align: 'center', width: 80, formatter: 'actions',
              formatoptions: {
                keys: true,
                editbutton: true,
                delbutton: true
              }
            }
          ],
          editurl : this.editurl,
          inlineEditing: {keys: true},
          ondblClickRow: function (rowid, iRow, iCol, e) {
            const $self = $(this), savedRow = $self.jqGrid('getGridParam', 'savedRow');
            if (savedRow.length > 0 && savedRow[0].id !== rowid) {
              $self.jqGrid('restoreRow', savedRow[0].id);
            }
            $self.jqGrid('editRow', rowid, {
              keys: true,
              aftersavefunc: function (row_id) {
                const rowData = $(this).jqGrid('getRowData', row_id);
                const row_data = {
                  id: row_id + '',
                  userId: rowData.userId,
                  userName: rowData.userName,
                  status: rowData.status
                };
                if (this.gridData) {
                  for (let i = 0; i < this.gridData.length; i++) {
                    if (this.gridData[i].id === rowData.id) {
                      this.gridData[i] = rowData;
                      break;
                    }
                  }
                }
              },
              focusField: 'userId'
            });
          },
          actionsNavOptions: {
            editbutton: true,
            custom: [
              {
                action: 'add', position: 'first',
                onClick: function (options) {
                  // Logic for adding new row
                  alert('Insert row logic');
                }
              }
            ],
            addicon: 'fa-plus',
            isDisplayButtons: function (options) {
              if (options.rowData.id === this.gridData[0].id) {
                return {del: {display: false}};
              }
            }
          },
        //  guiStyle: 'bootstrapPrimary',
          iconSet: 'fontAwesome',
          cmTemplate: {autoResizable: true, editable: true},
          autoResizing: {compact: true, resetWidthOrg: true},
          frozenColumns: false,
          // createColumnIndex: true,
          idPrefix: 'user_',
          rowNum: 5,
          rowList: ['5:5', '20:20', '30:30', '100:100', '10000:All'],
          pgbuttons: true,     // disable page control like next, back button
          pgtext: null,         // disable pager text like 'Page 0 of 10'
          viewrecords: true,    // disable current view record text like 'View 1-10 of 100'
          autoencode: true,
          autowidth: true,
          toppager: false,
          pager: true,
          rownumbers: true,
          pagerRightWidth: 150,
          treeGrid: false,
         // datatype: 'local',
          singleSelectClickMode: 'selectonly', // prevent unselect once selected rows
          formEditing: {
            closeOnEscape: true,
            closeAfterEdit: true,
            savekey: [true, 13]
          },
          caption: '현황판',
          afterSetRow: function (options) {
            const item = $(this).jqGrid('getLocalRow', options.rowid);
            if (item != null) {
              item.dirty = true;
            }
          },
          navOptions: {
            edit: false,
            add: false,
            search: false,
            del: true,
            save: false,
            refresh: true
          },
          inlineNavOptions: {
            edit: true,
            add: true,
            save: true,
            del: true,
            savetext: '저장',
            cancel: true,
            restoreAfterSelect: true
          },
          loadComplete: function (data) {
            if (data != null) {
              $('.tree-leaf', $(this)).css('width', '0px');
            }
          }
        }).jqGrid('navGrid')
          .jqGrid('inlineNav')
          .jqGrid('filterToolbar');
      });
    });
  }

  /**
   * Method to stop 'sorting' the column when clicking the 'filter' icon in the headers
   * @param evt
   */
  stopPropagation(evt: any) {
    if (evt.stopPropagation !== undefined) {
      evt.stopPropagation();
    } else {
      evt.cancelBubble = true;
    }
  }
}
