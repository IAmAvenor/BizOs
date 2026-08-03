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
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);

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
          {/* Back Navigation Arrow */}
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backArrowText}>←</Text>
          </Pressable>

          {/* Header Layout */}
          <View style={styles.headerContainer}>
            <Text style={styles.headtext}>
              Welcome back <Text style={styles.waveEmoji}>👋</Text>
            </Text>
            <Text style={styles.subtext}>Sign in to your account</Text>
          </View>

          {/* Form Block */}
          <View style={styles.formContainer}>
            {/* Email Address */}
            <View style={styles.inputOuterBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.textInputStyle}
                placeholder="you@business.com"
                placeholderTextColor="#A1A1AA"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Field with Inline Forgot Link */}
            <View style={styles.inputOuterBox}>
              <View style={styles.passwordHeaderRow}>
                <Text style={styles.inputLabel}>Password</Text>
                <Pressable onPress={() => router.push("/(auth)/forgot-password")}>
                  <Text style={styles.forgotText}>Forgot?</Text>
                </Pressable>
              </View>
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
          </View>

          {/* Remember Me Checkbox Row */}
          <View style={styles.rememberMeContainer}>
            <Pressable
              style={[styles.checkboxBase, rememberMe && styles.checkboxChecked]}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && <Text style={styles.checkmarkIcon}>✓</Text>}
            </Pressable>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>

          {/* Primary Action Button */}
          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.primaryButtonPressed,
            ]}
            onPress={() => router.replace("/(tabs)/home")}
          >
            <Text style={styles.primaryButtonText}>Sign In</Text>
          </Pressable>

          {/* Content Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

       
          {/* Long Stacked Social Buttons */}
          <View style={styles.socialStackContainer}>
            <Pressable style={styles.socialLongButton}>
              <Image 
                source={require("@/assets/images/google.png")} 
                style={styles.socialIconImage} 
              />
              <Text style={styles.socialLongButtonText}>Continue with Google</Text>
            </Pressable>

            <Pressable style={styles.socialLongButton}>
              <Image 
                source={require("@/assets/images/apple.png")} 
                style={styles.socialIconImage} 
              />
              <Text style={styles.socialLongButtonText}>Continue with Apple</Text>
            </Pressable>
          </View>

          {/* Bottom Switch Redirection */}
          <Pressable
            style={styles.switchModeContainer}
            onPress={() => router.push("/(auth)/sign-up")}
          >
            <Text style={styles.switchModeText}>
              Don't have an account? <Text style={styles.hyperlinkText}>Sign up</Text>
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
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 12,
  },
  backArrowText: {
    fontSize: 24,
    color: "#1F2937",
    fontWeight: "600",
  },
  headerContainer: {
    marginTop: 16,
    marginBottom: 28,
  },
  headtext: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 6,
  },
  waveEmoji: {
    fontSize: 24,
  },
  subtext: {
    fontSize: 14,
    color: "#6B7280",
  },
  formContainer: {
    gap: 16,
    marginBottom: 16,
  },
  inputOuterBox: {
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  passwordHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4B5563",
  },
  forgotText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#9CA3AF",
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
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 4,
  },
  checkboxBase: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#00A86B",
    borderColor: "#00A86B",
  },
  checkmarkIcon: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },
  rememberMeText: {
    fontSize: 14,
    color: "#4B5563",
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
    marginBottom: 24,
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
  socialStackContainer: {
    gap: 12,
    marginBottom: 32,
  },
  socialLongButton: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  socialButtonIcon: {
    fontSize: 18,
    marginRight: 10,
    color: "#1F2937",
  },
  socialLongButtonText: {
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
    socialIconImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 12, 
  },

});
