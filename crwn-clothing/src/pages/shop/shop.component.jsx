import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';
const ShopPage = ({match}) => {
       
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
            
            );
    
}



export default ShopPage;