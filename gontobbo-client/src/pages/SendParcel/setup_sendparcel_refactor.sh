#!/bin/bash

MODULE_DIR="src/pages/SendParcel_refactored"
COMMIT_MSG="refactor: added improved SendParcel module version"

mkdir -p "$MODULE_DIR"/{components,hooks,services,constants,utils}

# === COMPONENTS ===
cp src/pages/SendParcel/components/FormInput.jsx "$MODULE_DIR/components/"
cp src/pages/SendParcel/components/FormSelect.jsx "$MODULE_DIR/components/"
cp src/pages/SendParcel/components/FormTextarea.jsx "$MODULE_DIR/components/"
cp src/pages/SendParcel/components/ParcelInfo.jsx "$MODULE_DIR/components/"
cp src/pages/SendParcel/components/RecieverInfo.jsx "$MODULE_DIR/components/ReceiverInfo.jsx"
cp src/pages/SendParcel/components/SenderInfo.jsx "$MODULE_DIR/components/"
cp src/pages/SendParcel/components/SendParcelForm.jsx "$MODULE_DIR/components/"
cp src/pages/SendParcel/components/SendParcleFormRadioGroup.jsx "$MODULE_DIR/components/FormRadioGroup.jsx"

# === PAGE ===
cp src/pages/SendParcel/SendParcel.jsx "$MODULE_DIR/"

# === CONSTANTS ===
cp src/pages/SendParcel/sendpercel.constant.js "$MODULE_DIR/constants/sendParcel.testData.js"

# === UTILS ===
cat > "$MODULE_DIR/utils/regionUtils.js" << 'EOF'
export const getUniqueRegions = (centers) =>
  Array.from(new Set(centers.map(c => c.region)));

export const getDistrictsByRegion = (centers, region) =>
  centers
    .filter(c => c.region === region)
    .map(c => c.district);
EOF

# === HOOK ===
cat > "$MODULE_DIR/hooks/useSendParcel.js" << 'EOF'
import { useParcelForm } from "../../../hooks/useParcelForm";

export const useSendParcel = () => {
  return useParcelForm(); // simply re-exported for isolation
};
EOF

# === SERVICE ===
cat > "$MODULE_DIR/services/parcelService.js" << 'EOF'
// Example placeholder for future API integration
export const submitParcelForm = async (formData) => {
  console.log("Submitting:", formData);
  // You can replace this with actual API call
};
EOF

# === GIT ACTION ===
git add "$MODULE_DIR"
git commit -m "$COMMIT_MSG"

echo "✅ SendParcel module refactored and committed."

