# AGROTRUST QRIOSITY

AgroTrust™ is a blockchain enabled traceability solution with the aim of integrating of global food value chains.

Small landholding farmers across the developing world are suffering due to fragile market linkages, weak bargaining power, exploitation by middlemen and high spillage & spoilage. On the other end, consumers are rarely aware about agricultural products they consume, their quality, safety, and sustainability. They are even more oblivious about how much of their paid price goes back to the farmer. A bouquet made by roses bought at 50 INR/Kg from the farmer, are sold at an outrageous 600 INR/Kg in the same geographical vicinity during Valentine’s season. If the farmer has no information about the market, he has no incentive to bargain for a higher price. A consumer buys Tomato Sauce which costs 30 INR/500g and ignores a product costing 35 INR/500g, when the second processor is employing better work conditions and pesticide safety assessments. Even if the consumer is concerned, she does not have that information available in an easy to consume form. We at Emertech Innovations believe that these problems could be solved by subscribing to a value chain approach. Only when the farmer knows the complete story of his product from farm to fork and the consumer knows the complete story of his food from fork to farm, these problems could be addressed. Only when the both ends of the value chain – the farmer and the consumer – are aware about each other, will the players in the middle be incentivized to ensure better products and fair prices.

Creating fair value through Transparency and Trust is the core philosophy of AgroTrust™.

Any positive changes in the food value chains would be driven by consumers. Consumer awareness is constantly increasing, resulting in demands of transparency about origin, quality, safety of products, but are unable to acquire or verify this information to positively impact their purchasing decisions. They are left at the mercy of a brand’s reputation or hastily printed labels with inadequate information making responsible, ethical consumption a hyped but seldom practiced idea.

Using Blockchain, we are attempting to connect millions of fractured value chains so that the Consumer can know and verify the complete story of the food product they are consuming AND they are aware about how much of their money is going to the farmer. We cannot think about the consumer’s benefits in silo. He is inherently connected with the farmer. Whatever food products you eat in your home are grown by a farmer. So, when we pay 60 INR for a piece of cauliflower in a supermarket, why do we never ask how much of this 60 INR is going back to the farmer? As mentioned, creating fair value through Price Transparency is our core philosophy, this concept is unheard of and we are pioneering answers that weren’t explored before. Focus on the consumer, yes, but don’t forget the farmer! In order to achieve these goals we are not using blockchain as a supporting technology, as one more layer on top of existing digitization. Blockchain is the core of AgroTrust™, it redefines the transformation of agricultural businesses and their operational processes.

### What is this repository for?

-  Quick summary

AgroTrust QRiosity provides GET APIs for farmer and consumer transparency. QRiosity calls AgroTrust Interface to read the data from relevant crop blockchain, calculates traceability outputs for given product units and responds with a result.

-  Version

   0.1.0

### How to Test?

Run load-test-data.sh bash script in AgroTrust-Master repository to load a dummy data simulating a value chain with below details:

-  6 Farmers with 6 origins
-  1 Processing Center, 2 Distribution Centers and 2 Retail Stores
-  6 Crops with 3 Blockchains viz. agrotrust-citrus, agrotrust-leafy, agrotrust-cucurbits
-  6 Materials, one for each crop
-  6 SKUs, CRATE and Finished-Good for three crops
-  6 inward operations, 6 conversion operations, 2 dispatch operations

Consumer APIs:
Know Your Farmer:
http://localhost:9000/consumer/kyfarmer/c003e003/1000001c

Know Your Food:
http://localhost:9000/consumer/kyfood/c003e003/1000001c

Know Your Journey:
http://localhost:9000/consumer/kyjourney/c003e003/1000001c

Know Your Money (Work in Progress):
http://localhost:9000/consumer/kyjourney/c003e003/1000001c

BTU IDs which could be tested are:
["1000001c","1000001d","1000001e","1000001f","10000020","10000021","10000022"]
