class Solution {
    static boolean isBalanced(String s) {
        // code here
        boolean curly = true;
        boolean square = true;
        boolean small = true;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='(') small = false;
            else if(s.charAt(i)=='{') curly = false;
            else if(s.charAt(i)=='[') square = false;
            else if(s.charAt(i)==')') small = true;
            else if(s.charAt(i)=='}') curly = true;
            else if(s.charAt(i)==']') square = true;
        }
        if(curly && square && small) return true;
        else return false;
    }
    public static void main(String[] args) {
        System.out.println(isBalanced("[{()}]"));
    }
}