/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnosTopoRoutingModule} from './onos-topo-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Gui2FwLibModule} from 'gui2-fw-lib';
import {grpc_web_topo_proxy} from '../../environments/environment';
import {OnosTopoDeviceService} from './proto/onos-topo-device.service';
import {DevicesListComponent} from './devices-list/devices-list.component';
import {DeviceDetailComponent} from './device-detail/device-detail.component';
import {TopoDeviceService} from './topodevice.service';
import {DeviceSearchPipe} from './device-search.pipe';
import {LoggedinService} from '../loggedin.service';
import {EntityListComponent} from './entity-list/entity-list.component';
import {EntityDetailComponent} from './entity-detail/entity-detail.component';

const GRPC_WEB_TOPO_PROXY = new InjectionToken<string>('grpc.web.topo.proxy');

@NgModule({
    declarations: [DevicesListComponent, DeviceDetailComponent, DeviceSearchPipe, EntityListComponent, EntityDetailComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OnosTopoRoutingModule,
        Gui2FwLibModule,
    ],
    providers: [
        {
            provide: GRPC_WEB_TOPO_PROXY,
            useValue: grpc_web_topo_proxy
        },
        {
            provide: OnosTopoDeviceService,
            deps: [LoggedinService, GRPC_WEB_TOPO_PROXY],
        },
        {
            provide: TopoDeviceService,
            useClass: TopoDeviceService
        }
    ],
})
export class OnosTopoModule {
}
