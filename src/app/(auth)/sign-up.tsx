import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Signup() {
  const [isChecked, setIsChecked] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.flexContainer}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {/* Header Layout */}
          <View style={styles.headerContainer}>
            <View style={styles.headerTextWrapper}>
              <Text style={styles.headtext}>
                Create your account <Text style={styles.waveEmoji}>👋</Text>
              </Text>
              <Text style={styles.subtext}>
                Start managing your business smarter with AI.
              </Text>
            </View>
            {/* Logo Graphics */}
            <View style={styles.logoContainer}>
              <View style={styles.logoCircle}>
              <Image 
    source={require("@/assets/images/splash-icon.png")} 
    style={{ width: 28, height: 48, resizeMode: "cover" }} 
  />
              </View>
            </View>
          </View>

          {/* Input Fields Block */}
          <View style={styles.formContainer}>
            {/* Full Name */}
            <View style={styles.inputOuterBox}>
              <Text style={styles.inputLabel}>👤 Full Name</Text>
              <TextInput
                style={styles.textInputStyle}
                placeholder="John Doe"
                placeholderTextColor="#A1A1AA"
              />
            </View>

            {/* Email Address */}
            <View style={styles.inputOuterBox}>
              <Text style={styles.inputLabel}>✉️ Email Address</Text>
              <TextInput
                style={styles.textInputStyle}
                placeholder="you@business.com"
                placeholderTextColor="#A1A1AA"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Phone Number */}
            <View style={styles.inputOuterBox}>
              <Text style={styles.inputLabel}>📞 Phone Number</Text>
              <TextInput
                style={styles.textInputStyle}
                placeholder="+234 801 234 5678"
                placeholderTextColor="#A1A1AA"
                keyboardType="phone-pad"
              />
            </View>

            {/* Password */}
            <View style={styles.inputOuterBox}>
              <Text style={styles.inputLabel}>🔒 Password</Text>
              <View style={styles.rowAlign}>
                <TextInput
                  style={[styles.textInputStyle, { flex: 1 }]}
                  placeholder="••••••••••••"
                  placeholderTextColor="#A1A1AA"
                  secureTextEntry={securePassword}
                />
                <Pressable onPress={() => setSecurePassword(!securePassword)}>
                  <Text style={styles.eyeIcon}>{securePassword ? "👁️" : "🙈"}</Text>
                </Pressable>
              </View>
            </View>

            {/* Confirm Password */}
            <View style={styles.inputOuterBox}>
              <Text style={styles.inputLabel}>🔒 Confirm Password</Text>
              <View style={styles.rowAlign}>
                <TextInput
                  style={[styles.textInputStyle, { flex: 1 }]}
                  placeholder="••••••••••••"
                  placeholderTextColor="#A1A1AA"
                  secureTextEntry={secureConfirmPassword}
                />
                <Pressable onPress={() => setSecureConfirmPassword(!secureConfirmPassword)}>
                  <Text style={styles.eyeIcon}>{secureConfirmPassword ? "👁️" : "🙈"}</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Terms and Conditions Checkbox */}
          <View style={styles.checkboxContainer}>
            <Pressable
              style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
              onPress={() => setIsChecked(!isChecked)}
            >
              {isChecked && <Text style={styles.checkmarkIcon}>✓</Text>}
            </Pressable>
            <Text style={styles.labelWrapper}>
              <Text style={styles.regularText}>I agree to the </Text>
              <Text style={styles.linkText}>Terms of Service</Text>
              <Text style={styles.regularText}> and </Text>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>
          </View>

          {/* Main Action Button */}
          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.primaryButtonPressed,
            ]}
            onPress={() => router.replace("/(tabs)/home")}
          >
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </Pressable>

          {/* Social Sign Up Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or sign up with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Buttons */}
          <View style={styles.socialButtonsRow}>
            <Pressable style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Google</Text>
            </Pressable>
            <Pressable style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Apple</Text>
            </Pressable>
          </View>

          {/* Login Redirection */}
          <Pressable
           style={styles.switchModeContainer}
            onPress={() => router.push("/(auth)/sign-in")}>
            <Text style={styles.switchModeText}>
              Already have an account? <Text style={styles.hyperlinkText}>Sign in</Text>
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  flexContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
    marginBottom: 24,
  },
  headerTextWrapper: {
    flex: 1,
    paddingRight: 16,
  },
  headtext: {
    fontSize: 40,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
  },
  waveEmoji: {
    fontSize: 24,
  },
  subtext: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E6F7F0",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00A86B",
  },
  formContainer: {
    gap: 16,
    marginBottom: 20,
  },
  inputOuterBox: {
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4B5563",
    marginBottom: 4,
  },
  textInputStyle: {
    fontSize: 15,
    color: "#1F2937",
    padding: 0,
    height: 24,
  },
  rowAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    fontSize: 18,
    color: "#9CA3AF",
    paddingLeft: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  checkboxBase: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: "#00A86B",
    borderColor: "#00A86B",
  },
  checkmarkIcon: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  labelWrapper: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  regularText: {
    color: "#4B5563",
  },
  linkText: {
    color: "#00A86B",
    fontWeight: "600",
  },
  primaryButton: {
    height: 54,
    backgroundColor: "#00A86B",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  primaryButtonPressed: {
    opacity: 0.85,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerText: {
    fontSize: 13,
    color: "#9CA3AF",
    paddingHorizontal: 12,
  },
  socialButtonsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },
  socialButton: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },
  switchModeContainer: {
    alignSelf: "center",
    paddingVertical: 8,
  },
  switchModeText: {
    fontSize: 14,
    color: "#4B5563",
  },
  hyperlinkText: {
    color: "#00A86B",
    fontWeight: "600",
  },
});
