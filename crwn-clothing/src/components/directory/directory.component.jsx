import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';

const Directory = ({directory}) => {
        return (
            <div className='directory-menu'>
                {
                    
                    directory.map(({id, ...otherSectionProps}) => (
                        // eslint-disable-next-line
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    
}

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections

});

export default connect(mapStateToProps)(Directory);