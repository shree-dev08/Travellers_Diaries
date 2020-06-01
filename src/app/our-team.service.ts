import { Injectable } from '@angular/core';
import { OurTeam } from './our-team.model';

@Injectable({
  providedIn: 'root'
})
export class OurTeamService {

  teams: OurTeam[] = [
                          new OurTeam(
                                        1,
                                        'John Smith',
                                        'Staff',
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error',
                                        'assets/images/person_1.jpg'
                                      ),
                          new OurTeam(
                                        2,
                                        'Symphony Ray',
                                        'Staff',
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error',
                                        'assets/images/person_2.jpg'
                                      ),
                          new OurTeam(
                                        3,
                                        'Rachael Adams',
                                        'Staff',
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error',
                                        'assets/images/person_3.jpg'
                                      ),
                    ]
  constructor() { }
}
