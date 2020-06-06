import { Component, OnInit } from '@angular/core';
import { Vocab } from "../vocab";
import { Vocablist } from "../vocablist";
import { VocablistService } from '../vocablist.service';

@Component({
  selector: 'app-swedish',
  templateUrl: './swedish.component.html',
  styleUrls: ['./swedish.component.css']
})
export class SwedishComponent implements OnInit {
  vocablists: Vocablist[];

  constructor(private vocablistService: VocablistService) { }

  ngOnInit(): void {
    this.getVocablists();
  }

  getVocablists(): void {
    this.vocablistService.getVocablists().subscribe(
      vocablists => {
        this.vocablists = vocablists;
        console.log(this.vocablists)
      }
    );
  }
}
