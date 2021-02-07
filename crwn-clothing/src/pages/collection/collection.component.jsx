import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selectors';
const Collection = ({collection}) => {
    const {items, title} = collection;
    console.log(collection);
    return(
    <div className='collection-page'>
        <h2>{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
}); 
export default connect(mapStateToProps)(Collection);