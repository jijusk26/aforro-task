import { Image, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Colors } from '../../../constants/colors';
import { LocalImages } from '../../../assets/images/images';

export const Arc = ({ size = 40, strokeWidth = 3, progress = 0.75 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Svg width={size} height={size}>
        <Circle
          stroke="#E5E7EB"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={Colors.secondary}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <View style={{ position: 'absolute' }}>
        <Image
          source={LocalImages.cashback}
          style={{ height: 24, width: 24 }}
        />
      </View>
    </View>
  );
};
