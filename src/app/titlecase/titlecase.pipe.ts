import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value){
      return null;
    }

    let words = value.toLowerCase().split(' ');
    
    for (let i = 0; i < words.length; i++) {
      if(i == 0){
        words[i] = this.toTitleCase(words[i]);
      } else {
        words[i] = this.isLowerCaseWord(words[i]) ? words[i] : this.toTitleCase(words[i]);
      }
    }

    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substr(0,1).toUpperCase() + word.substr(1);
  }

  private isLowerCaseWord(word: string): boolean {
    let lowerCaseWords = [
      "and",
      "but",
      "or",
      "nor",
      "the",
      "a",
      "an",
      "as",
      "about",
      "above",
      "across",
      "after",
      "against",
      "among",
      "around",
      "at",
      "before",
      "behind",
      "below",
      "beside",
      "between",
      "by",
      "down",
      "during",
      "for",
      "from",
      "in",
      "inside",
      "into",
      "near",
      "of",
      "off",
      "on",
      "out",
      "over",
      "through",
      "to",
      "toward",
      "under",
      "up",
      "with",
    ];
    return lowerCaseWords.includes(word);
  }

}
