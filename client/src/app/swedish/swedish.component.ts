import { Component, OnInit } from '@angular/core';
import { Vocab } from "../vocab";
import { Vocablist } from "../vocablist";
import { Grammar } from "../grammar";
import { VocablistService } from '../vocablist.service';
import { GrammarService } from '../grammar.service';

@Component({
  selector: 'app-swedish',
  templateUrl: './swedish.component.html',
  styleUrls: ['./swedish.component.css']
})
export class SwedishComponent implements OnInit {
  vocablists: Vocablist[];
  grammars: Grammar[];

  constructor(private vocablistService: VocablistService, private grammarService: GrammarService) { }

  ngOnInit(): void {
    this.getVocablists();
    this.getGrammars();
  }

  getVocablists(): void {
    this.vocablistService.getVocablists().subscribe(
      vocablists => {
        this.vocablists = vocablists;
        console.log(this.vocablists)
      }
    );
  }
  getGrammars(): void {
    this.grammarService.getGrammars().subscribe(
      grammars => {
        this.grammars = grammars;
        console.log(this.grammars)
      }
    );
  }
}
