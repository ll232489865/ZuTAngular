import { Injectable } from '@angular/core';
import { Tabs } from './tabs';
import { TabsList } from './mock-tabs';

@Injectable()
export class TabsService {
    tabOnCont = 0;
    getTabs(): Promise<Tabs[]> {
        return Promise.resolve(TabsList);
     }
}
