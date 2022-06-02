import { Component, OnInit } from '@angular/core';
import { Question } from 'src/question';
import { QUESTIONS } from 'src/questionRepository';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  questions = QUESTIONS
  i:number = 0

  sprawdz():void{
    console.log(this.questions[0].chosenAnswerIndex)
    this.i += 1
  }
}
