import { Dimensions, StyleSheet } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    height: height,
  },
  logoContainer: {
    padding: SPACING.large,
    alignItems: "center",
    marginTop: 74,
  },
  titleContainer: {
    marginTop: SPACING.large,
  },
  titleText: {
    fontSize: FONT_SIZE.large,
    textAlign: "center",
    fontWeight: 800,
    color: COLORS.white,
  },
  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },
  titleSubText: {
    fontWeight: 300,
    fontSize: FONT_SIZE.small,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    flex: 1,
  },
  buttonPrimaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
  },
  buttonSecondary: {
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.small,
    marginTop: 19,
  },


    searchGroup: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 24,
    padding: 8,
  },
  searchControlGroup: {
    flex: 1,
    paddingHorizontal: 12,
  },
  searchFormText: {
    fontSize: 14,
    color: '#333',
  },
  searchControl: {
    paddingVertical: 4,
  },
  searchButton: {
    backgroundColor: '#FF385C',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterGroup: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 24,
  },
  filterContainer: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  listingContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  paginationContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  showMoreButton: {
    backgroundColor: '#FF385C',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export { styles };

