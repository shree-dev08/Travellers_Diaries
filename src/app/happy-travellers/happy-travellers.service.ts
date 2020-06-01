import { Injectable } from '@angular/core';
import { HappyTravellers } from './happy-travellers.model';

@Injectable({
    providedIn: 'root'
  })
export class HappyTravellersService{
    happyTravellers: HappyTravellers[] = [
                                            new HappyTravellers(
                                                1,
                                                'Margaret E.',
                                                'assets/images/traveller1.jpg',
                                                'Had a great and memorable trip!'
                                            ),
                                            new HappyTravellers(
                                                2,
                                                'Fred S.',
                                                'assets/images/traveller2.jpg',
                                                'The trek I did was the best till date!'
                                            ),
                                            new HappyTravellers(
                                                3,
                                                'Sarah W.',
                                                'assets/images/traveller3.jpg',
                                                'Thank you guys for organising such a wonderful trip!'
                                            )
                                         ]
}