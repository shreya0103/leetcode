
/*
RRVERSE STRING
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n=s.length;
    let str;
    for(let i=0;i<n/2;i++)
        {
            let t=s[i];
            s[i]=s[n-1-i];
            s[n-1-i]=t;
            
        }
    return s;
    
}

/*
SINGLE NUMBER
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
     let t;
     for(let i=0;i<nums.length;i++)
         {
             t=nums[i]^t;
         }
     return t;
     
 };



 /*
MAJORITY ELEMENT
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     let c=0,t=0;
     
     for(let i=0;i<nums.length;i++)
         {
             if(c==0)
                 t=nums[i];
         
     nums[i]==t?c++:c--;
         }
     
 return t;
     
 };




 /*
FIZZBUZZ
 */
/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
     let s=[];
     for(let i=1;i<=n;i++)
     {
         let temp='';
         if(i%3==0 && i%5==0)
             temp="FizzBuzz";
         else if(i%3==0)
              temp="Fizz";
         else if(i%5==0)
              temp+="Buzz";
         else
             temp=i.toString();
         s.push(temp);
             
     }
     return s;
     
 };


 /*
SPIRAL MATRIX
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
     let n=matrix.length;
     let m=matrix[0].length;
     let siz=n*m;
     let c=0;
     let sr=0;
     let sc=0;
     let er=n-1;
     let ec=m-1;
     let ans=[];
     
     while(c<siz)
         {
             for(let i=sc;c<siz && i<=ec;i++)
                 {
                     ans.push(matrix[sr][i]);
                     c++;
                 }
             sr++;
             
              for(let i=sr;c<siz && i<=er;i++)
                 {
                     ans.push(matrix[i][ec]);
                     c++;
                 }
             ec--;
             
              for(let i=ec;c<siz && i>=sc;i--)
                 {
                     ans.push(matrix[er][i]);
                     c++;
                 }
             er--;
             
              for(let i=er;c<siz && i>=sr;i--)
                 {
                     ans.push(matrix[i][sc]);
                     c++;
                 }
             sc++;
             
         }
     return ans;
 };


 /*
FIRST AND LAST POSITION OF ELEMENT IN SORTED ARRAY
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
     let ans=[];
     let first=nums.indexOf(target);
     let last=nums.lastIndexOf(target);
 
     ans.push(first);
     ans.push(last);
 
     return ans;
     
 };