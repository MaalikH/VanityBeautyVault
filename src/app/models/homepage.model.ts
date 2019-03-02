import {About} from './about.model';
import {Gallery} from './gallery.model';
import {Stats} from './stats.model';
import {Subscribe} from './subscribe.model';
import {Training} from './training.model';
import {Services} from './services.model';
import {HomeServices} from './homeServices.model';

export interface HomePage {
  about: About;
  gallery: Gallery;
  services: HomeServices;
  stats: Stats;
  subscribe: Subscribe;
  training: Training;
}
