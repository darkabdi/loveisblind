const mongoose              = require('mongoose')
const User                  = require('./models/usermodel')
const express               = require('express')
const cors                  = require('cors')
const bodyParser            = require('body-parser')
const dotenv                = require('dotenv')
const bcrypt                = require('bcrypt')
const jwt                   = require('jsonwebtoken')
const app                   = express()


dotenv.config()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))



/**************MONGODB_CONNECTION***************/
mongoose
.connect(process.env.DATABASE_ACCESS, () => console.log('database connected'))
.catch((error) => console.log("Error reason: " + error));


//TEST
app.get('/api', (req, res) => {
    res.json({ message: "userRoute" });
})


/**************REGISTER***************/
app.post('/register', async (req,res, next) =>{
    try {
        const { firstname, email, password } = req.body;
        console.log(req.body)

        if (!(email && password && firstname)) {
            return res.status(400).send("All inputs are required");
        }
        console.log(email)

        const oldUser = await User.findOne({ email });
      
       
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        
        securePassword = await bcrypt.hash(password, 10)
        console.log("securepassword: " + securePassword)
        
        const user = await User.create({
            firstname,
            email: email.toLowerCase(),
            password: securePassword,
            isLoggedIn: false,
            
        })
        
        return res.json({status: 200, user: user, message: 'User was registered successfully!' })
        
    } catch (err){
        console.log('Error Register: ' + err)
        return res.json({status: 500 , err: '500 error'})
        
    }
})


/**************LOGIN***************/
app.post('/login', async (req,res) =>{
    try {
        const { email, password } = req.body
        
        if(!(email && password)) {
            console.log('All inputs are required')
            return res.status(400).send({ message: "All inputs are required" })
        }
        
        const user = await User.findOne({ email })
        if (!user) {
            console.log('User not found')
            return res.status(404).send({ message: "User Not found." });
        }
        const passwordValidation = await bcrypt.compare(password, user.password)
        if (!passwordValidation) {
            return res.status(401).send({
                token: null,
                message: "Invalid Password!"
            });
          }
        
        if(user && passwordValidation) {
            
            const token = jwt.sign({ 
                _id: user._id,
                
            }, process.env.JWT_SECRET, {
                expiresIn: "2h",
            }
            );
            const result = await User.findOneAndUpdate(
                { _id: user._id },
                { isLoggedIn: true },
                {
                    new: true,
                }
                
                ).exec();
                
                console.log(result)
                return res.json({
                    status: 200,
                    result: {
                        token,
                        user: {
                            id: result._id,
                            name: result.firstname + result.lastname,
                            isLoggedIn: result.isLoggedIn,
                        },
                    },
                    message: "Welcome",
                });
            }
            
        } catch (err) {
            console.log('Error reason: ' + err)
            return res.status()
            
        }
        
    })
    
    app.listen(process.env.PORT, () => console.log('app listening to port 4000'))
    
    

