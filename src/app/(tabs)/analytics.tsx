import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  Dimensions ,
  Image,
  ImageSourcePropType,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Svg, { Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg'; 
import  {format}  from 'date-fns';

const { width } = Dimensions.get('window');

interface TopProduct {
  id: string;
  name: string;
  category: string;
  revenue: string;
 image: ImageSourcePropType; 
}

export default function AnalyticsScreen() {
  // Get real-time Month & Year
  const currentMonthYear = format(new Date(), 'MMMM yyyy'); // Displays current calendar month & year
  const abbreviatedMonthYear = format(new Date(), 'MMM yyyy'); 

  const topProducts: TopProduct[] = [
    { id: '1', name: 'Wireless Headphones', category: 'Electronics', revenue: '$4,520.00', image: require('../../../assets/images/black_headphone.png'),},
    { id: '2', name: 'Smart Watch', category: 'Electronics', revenue: '$3,250.00',  image: require('../../../assets/images/smart_watch.png'), },
    { id: '3', name: 'Power Bank 20K', category: 'Accessories', revenue: '$2,150.00',  image: require('../../../assets/images/powerbank_20k.png'), },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Analytics</Text>
          <TouchableOpacity style={styles.dropdownButton}>
            <Text style={styles.dropdownText}>{currentMonthYear}</Text>
            <MaterialCommunityIcons name="chevron-down" size={18} color="#1F2937" />
          </TouchableOpacity>
        </View>

        {/* Revenue Summary Card */}
        <View style={styles.revenueCard}>
          <Text style={styles.revenueLabel}>Total Revenue</Text>
          <Text style={styles.revenueAmount}>$24,560.00</Text>
          <View style={styles.badgeRow}>
            <View style={styles.percentageBadge}>
              {/* Arrow adjusted to standard Expo vector icon names */}
              <MaterialCommunityIcons name="arrow-up-right" size={14} color="#10B981" />
              <Text style={styles.percentageText}>12.5%</Text>
            </View>
            <Text style={styles.badgePeriod}>vs {abbreviatedMonthYear}</Text>
          </View>
        </View>

        {/* Chart Card */}
        <View style={styles.chartCard}>
          <Svg height="160" width={width - 48} viewBox={`0 0 ${width - 48} 160`}>
            <Defs>
              <LinearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                <Stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
              </LinearGradient>
            </Defs>
            
            {/* Grid Lines */}
            <Path d={`M 0 40 L ${width - 48} 40`} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
            <Path d={`M 0 80 L ${width - 48} 80`} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
            <Path d={`M 0 120 L ${width - 48} 120`} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />

            {/* Area Fill */}
            <Path
              d={`M 10 130 Q 60 70, 110 110 T 210 50 T 310 40 L ${width - 58} 140 L 10 140 Z`}
              fill="url(#chartGradient)"
            />

            {/* Line Spline */}
            <Path
              d={`M 10 130 Q 60 70, 110 110 T 210 50 T 310 40`}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="3"
            />

            {/* Indicator Dot */}
            <Circle cx="210" cy="50" r="5" fill="#3B82F6" />
            <Circle cx="210" cy="50" r="10" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.3" />
          </Svg>

          {/* Timeframe Filter Navigation Bar */}
          <View style={styles.timeframeRow}>
            {['1W', '1M', '3M', '6M', '1Y'].map((item, idx) => (
              <TouchableOpacity 
                key={item} 
                style={[styles.timeframeTab, idx === 1 && styles.activeTimeframeTab]}
              >
                <Text style={[styles.timeframeText, idx === 1 && styles.activeTimeframeText]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Top Performing Products Ledger */}
        <View style={styles.productsSection}>
          <Text style={styles.sectionTitle}>Top Products</Text>
          
          {topProducts.map((product) => (
            <View key={product.id} style={styles.productListItem}>
              <View style={styles.productIconFrame}>
               <Image 
                source={product.image} 
                style={styles.productImage} 
                resizeMode="cover"
              />
              </View>
              
              <View style={styles.productDetailsContainer}>
                <Text style={styles.productTitleText} numberOfLines={1}>{product.name}</Text>
                <Text style={styles.productSubtext}>{product.category}</Text>
              </View>
              
              <Text style={styles.productFinancialValue}>{product.revenue}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop:40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginRight: 4,
  },
  revenueCard: {
    marginBottom: 20,
  },
  revenueLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  revenueAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentageBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F4EA',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 8,
  },
  percentageText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10B981',
    marginLeft: 2,
  },
  badgePeriod: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 28,
  },
  timeframeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    padding: 4,
  },
  timeframeTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTimeframeTab: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  timeframeText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTimeframeText: {
    color: '#111827',
    fontWeight: '600',
  },
  productsSection: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  productListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 10,
  },
 productIconFrame: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', 
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productDetailsContainer: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  productTitleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  productSubtext: {
    fontSize: 12,
    color: '#6B7280',
  },
  productFinancialValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
});
