import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_ICONS, PRIMARY_COLOR } from '#src/constants';

const FooterMenu = (): JSX.Element => {
  const [selectedMenu, setSelectedMenu] = useState(MENU_ICONS[0]);
  return (
    <View className="absolute bottom-8 flex-row rounded-3xl justify-around w-full h-20 bg-white">
      {MENU_ICONS.map(menuIcon => (
        <TouchableOpacity
          key={menuIcon}
          onPress={() => {
            setSelectedMenu(menuIcon);
          }}>
          <View className="relative h-full flex justify-center mx-4">
            {selectedMenu === menuIcon && (
              <View
                style={styles.selectedMenuLine}
                className="absolute top-0 w-full rounded-md bg-red-400"
              />
            )}

            <Icon
              name={menuIcon}
              size={33}
              color={selectedMenu === menuIcon ? PRIMARY_COLOR : 'gray'}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = {
  selectedMenuLine: {
    height: 6,
  },
};

export default FooterMenu;
