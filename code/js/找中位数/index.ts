const findMedianSortedArrays = function (nums1: number[], nums2: number[]) {
  const lenN1 = nums1.length;
  const lenN2 = nums2.length;
  const median = Math.ceil((lenN1 + lenN2 + 1) / 2);
  const isOddLen = (lenN1 + lenN2) % 2 === 0;
  const result = new Array<number>(median);
  let i = 0;
  let j = 0;
  for (let k = 0; k < median; k++) {
    if (i < lenN1 && j < lenN2) {
      if (nums1[i] < nums2[j]) {
        result[i + j] = nums1[i++];
      } else {
        result[i + j] = nums2[j++];
      }
    } else if (i < lenN1) {
      result[i + j] = nums1[i++];
    } else if (j < lenN2) {
      result[i + j] = nums2[j++];
    }
  }
  if (isOddLen) {
    return (result[median - 1] + result[median - 2]) / 2;
  } else {
    return result[median - 1];
  }
};
