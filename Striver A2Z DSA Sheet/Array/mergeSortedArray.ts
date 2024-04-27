// ? Iterate from the last you will get that.

var merge = function (nums1: number[], m: number, nums2: number[], n: number) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

merge([1,2,3,0,0,0],3,[2,5,6],2);
