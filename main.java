import java.util.*;

public class Main
{
    static int []c = {5,4,3,2,1};
    public static int[] sort(int a[],int i, int j) {
       if(j==0)
        return a;
        
        
            if(i+1<j && a[i]>a[i+1] ){
                a[i+1] = a[i+1]+a[i];
                a[i] = a[i+1] - a[i];
                a[i+1] = a[i+1] - a[i];
            }
            for(int k=0;k<5;k++)
               System.out.println(a[k]);
               
                  System.out.println("j="+j);
            Main.sort(a, i,j-1);
        
        return a;
        
    }
    public void insertion (){

        for(int k=1;k<5;k++){
            int val = a[k];
            int i=k;int l=k;
            while(i-1>=0 && a[i]<a[--i])
            {
               l = i;
                i--;
            }
            for(int m = k; m>=i;m--){
                
            }

        }
               //System.out.println(a[k]);
               

    }
	public static void main(String[] args) {
        
		System.out.println("Hello World");
        insertion(Main.c,0,Main.c.length);
        for(int k=0;k<5;k++)
               System.out.println("Hello World "+c[k]);
	}
}
