import { Component, OnInit } from '@angular/core';
import { queueScheduler } from 'rxjs';
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
  points:number = 0
  stop:boolean = true

  go_next():void{
    // console.log(this.questions[this.i].chosenAnswerIndex)
    if (this.questions[this.i].chosenAnswerIndex == this.questions[this.i].rightAnswerIndex && this.stop) this.points += 1
    if (this.i < this.questions.length - 1) {this.i += 1}else{this.stop = false}

    console.log(`${this.i}        Your points: ${this.points} / ${this.questions.length}`)
  }

  go_prev():void{
    console.log(this.questions[this.i].chosenAnswerIndex)
    if (this.i > 0) this.i -=1
  }
}
