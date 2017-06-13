import { Injectable } from '@angular/core';
import { ds_lien_he } from "../models/mock_lien_he";
@Injectable()
export class LienHeService {

    constructor() { }
    lay_ds_lien_he()
    {
        return ds_lien_he;
    }
    
}