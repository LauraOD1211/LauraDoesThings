import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Vocab } from "../vocab";
import { Vocablist } from "../vocablist";
import { VocablistService } from '../vocablist.service';

@Component({
  selector: 'app-vocablist',
  templateUrl: './vocablist.component.html',
  styleUrls: ['./vocablist.component.css']
})
export class VocablistComponent implements OnInit {
  id: string;
  list: Vocablist;
  vocabs: Vocab[];

  constructor(private route: ActivatedRoute,private vocablistService: VocablistService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getVocablist();
  }

  getVocablist(): void {
    this.vocablistService.getVocablist(this.id).subscribe(
      vocablist => {
        this.list = vocablist;
        this.vocablistService.getVocabs(this.id).subscribe(
          vocabs => {
            this.vocabs = vocabs;
          }
        );
      }
    );
  }

}
