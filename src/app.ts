import {Observable, Subscription, Subscriber} from 'rxjs'

const getDelayedWord = (str : string, delay : number) => {
    const o : Observable<string> = new Observable((subs : Subscriber<string>) => {
        let j : number = 0 
        const interval = setInterval(() => {
          subs.next(str[j])
          j++
          if (j == str.length) {
              clearInterval(interval)
          }
        }, delay)
    })
    return o
}

getDelayedWord("Hello World", 1000).subscribe((data) => {
    console.log(data)
})
