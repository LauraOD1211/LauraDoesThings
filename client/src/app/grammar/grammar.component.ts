import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Grammar } from "../grammar";
import { GrammarService } from '../grammar.service';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {
  id: string;
  grammar: Grammar;

  constructor(private route: ActivatedRoute,private grammarService: GrammarService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getGrammar();
  }

  getGrammar(): void {
    this.grammarService.getGrammar(this.id).subscribe(
      grammar => {
        this.grammar = grammar;
      }
    );
  }

}
