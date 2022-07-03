import React from "react";
import PostTemplate from "./PostTemplate";
import Code from "./Code";
import { Link } from "react-router-dom";
var dedent = require('dedent-js');

function Post1() {


    let title = "Using auto";
    let date = "02/12/2022";
    let code1 =
        `int x = 50;\n` +
        `string s = hello`;

    let code2 =
        `auto x = 50;\nauto s = "hello";`;

    let code3 = `std::vector<int>::iterator it = vector<int> my_vec {1,2,3};`.trim();

    let code4 =
        `// my_map is defined as : std::map<vector<vector<int>>, std::vector<int>::iterator> my_map\nstd::map<vector<vector<int>>, std::vector<int>::iterator>::iterator my_iter = my_map.begin();`.trim();

    let code5 = `auto my_iter = my_map.begin();`.trim();

    let code6 = `  
    std::function<int(int, int)> sum = [](int a, int b){return a+b;}; // without auto\nauto sum = [](int a, int b){return a+b;}; // using auto`.trim();

    let code7 = dedent(`  
    auto sum = [](auto const a, auto const b){return a+b;}; // using auto
    // another example
    template<class A, class B>
    auto product(A a, B b){
        return A.value * B. value;
      }`);


    let code8 =
        `auto x; // will throw an error\nauto x = 1; // no error and a good practice too\nstring s = "Hello"\nint x = s.size(); // loss of data since unsigned int being converted to int\nauto x = s.size(); // no loss of data`.trim();

    let code9 = dedent(
    `static int val = 5;
    int & get_val(){
        return val;
    }
       
    int main(){
        auto y = get_val();
        val = 6;
        cout<<y<<endl; // gives 5
                        // new value of val not propogated to y
       }`);

    let code10 = dedent(
        `static int val = 5;
        int & get_val(){
            return val;
         }
        
        int main(){
            auto &y = get_val();
             val = 6;
             cout<<y<<endl; // gives 6
        }`)

    let content = <div id="typed-font">
        With C++11 came a new keyword called auto. This has made writing and reading programs so much simpler. For example previously we used to do something like this:
        <br>

        </br>
        <Code code={code1} language="cpp" />
        Now we can do something like this:
        <Code code={code2} language="cpp" />
        Well you'll say that's basic stuff. What's the big deal? Well it's kind of a big deal. Let's say you are working with non primitive data types like <code>{`std::vector`}</code>. To get the iterator to the vector you needed to do something like:
        <Code code={code3} language="cpp" />
        Well that does not seem that bad. Let's see the next example. Here we are using <code>{`std::map vector<vector<int>>`}</code> and <code>
            {`std::vector<int>::iterator it`}
        </code>.
        <Code code={code4} language="cpp" />
        Using <code>auto</code> it simplifies to:
        <Code code={code5} language="cpp" />
        <br></br>
        <h3>Using lambdas</h3>
        Another great use of auto is with lambdas.
        <Code code={code6} language="cpp" />
        It is also great to use for automatically deducing argument types
        <Code code={code7} language="cpp" />
        <br></br>
        <h3>Best use of auto</h3>
        In my opinion the best use of <code>auto</code> is in initializing variables. It makes sure that every variable gets initialized.
        <Code code={code8} language="cpp" />
        <br></br>
        <h3>Few caveats</h3>
        Be very careful while working with references. auto in general is not able to deduce referenced return type.
        <Code code={code9} language="cpp" />
        In the above program the data type of y is int and not <code>{`&int`}</code> as expected. The compiler is not able to deduce the return type as <code>{`&int`}</code> . This issue is easily solved by using <code>{`&auto`}</code> instead of auto.
        <Code code={code10} language="cpp" />
        For a more expansive overview visit <a href="https://en.cppreference.com/w/cpp/language/auto">auto</a>. Another great post by <a href="https://herbsutter.com/2013/08/12/gotw-94-solution-aaa-style-almost-always-auto/">Herb Setter</a>
        <br></br>
        Signing out
        <br></br>
        -G
    </div>



    return (<div>
        <React.StrictMode>
            {<PostTemplate title={title} content={content} date={date} />}
        </React.StrictMode>
    </div>
    )
};


export default Post1;