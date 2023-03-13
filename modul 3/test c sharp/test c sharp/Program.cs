namespace test_c_sharp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                Console.WriteLine("Shalom ingen parametere gitt ");
            }
            else
            {
                Console.WriteLine("Shalom her kommer paramterene dine ");
            }
            for (int i = 0; i<args.Length; i++)
            {
                var parameterNo = i + 1;
                Console.WriteLine("Shalom "+parameterNo+": " + args[i]);
            }
            foreach (string text in args)
            {
                Console.WriteLine("Shalom "+text);
            }
        }
    }
}