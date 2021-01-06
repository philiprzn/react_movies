import React from 'react';

const ProfileMenu = (props) => {
    const { profileMenuData } = props;

    return (
        <>
            <p>{profileMenuData}</p>
        </>
    )
};

export default ProfileMenu;