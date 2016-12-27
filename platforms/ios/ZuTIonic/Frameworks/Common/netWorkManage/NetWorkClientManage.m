//
//  NetWorkClientManage.m
//  TestNetWorkingDemo
//
//  Created by lianghuigui on 15/7/14.
//  Copyright (c) 2015年 lianghuigui. All rights reserved.
//

#import "NetWorkClientManage.h"
#import "Y_X_DataInterfance.h"
#import "Tool.h"
//#import "MBProgressHUD+Add.h"

#import "AppDelegate.h"
//#import "LoginViewController.h"
//#import "OverRidesViewController.h"



#define AlertTag 100
@implementation NetWorkClientManage
+ (NetWorkClientManage *)sharedClient
{
    static NetWorkClientManage *_sharedClient = nil;
    static dispatch_once_t oncePredicate;
    dispatch_once(&oncePredicate, ^{
        _sharedClient = [[self alloc] initWithBaseURL:[NSURL URLWithString:ZuTingURL]];
    });
    
    return _sharedClient;
}

#pragma mark-
#pragma mark--- 我们的新的api
-(void)IstudyRequestData:(NSString*)method
              parameters:(NSMutableDictionary*)requestParameters
        downloadProgress:(void (^)(NSUInteger bytesRead, long long totalBytesRead, long long totalBytesExpectedToRead))progressBlock
                 success:(void (^)( id responseObject))success
                 failure:(void (^)( NSError *error))failure
{
    self.requestSerializer=[AFHTTPRequestSerializer serializer];
    self.responseSerializer = [AFJSONResponseSerializer serializer];
    
    [self reachability];
    
    //url头
    NSString * requestUrl = [requestParameters objectForKey:SERVER];
    [requestParameters removeObjectForKey:SERVER];
    //url尾
    NSString * rValue=[requestParameters objectForKey:@"r"];
    [requestParameters removeObjectForKey:@"r"];
    //url
    NSURL *url= [NSURL URLWithString:[NSString stringWithFormat:@"%@%@",requestUrl,rValue]];
    if (url == NULL){
        return;
    }

    if (requestParameters.count==0) {
        requestParameters=nil;
    }
    
    
    AFHTTPSessionManager *sessionManager = [AFHTTPSessionManager manager];
    
    //1.请求头
    NSString * nowTime=[NSString stringWithFormat:@"%.0f",[[NSDate date] timeIntervalSince1970]*1000];
    //2.
    NSString * token=[[NSUserDefaults standardUserDefaults] objectForKey:HTTPTOKEN];
    //3.
    NSMutableDictionary *headDic=[[NSMutableDictionary alloc]initWithObjectsAndKeys:
                                  nowTime,@"timestamp",
                                  token,@"token",
                                  nil];
    for (id key in [requestParameters allKeys]) {
        id value=[requestParameters objectForKey:key];
        [headDic setObject:value forKey:key];
    }
    NSString *checksumStr=[self splitWithDic:headDic];
    NSString *checksum=[Tool md5:[NSString stringWithFormat:@"%@&%@%@",rValue,checksumStr,[[NSUserDefaults standardUserDefaults] objectForKey:MD5KEY]]];
    //4.
    NSString *checksumHeadersStr=@"[\"timestamp\",\"token\"]";
    //添加请求头
    [sessionManager.requestSerializer setValue:nowTime forHTTPHeaderField:@"timestamp"];
    [sessionManager.requestSerializer setValue:token forHTTPHeaderField:@"token"];
    [sessionManager.requestSerializer setValue:checksum forHTTPHeaderField:@"checksum"];
    [sessionManager.requestSerializer setValue:checksumHeadersStr forHTTPHeaderField:@"checksum-headers"];

    //get post
    if ([method isEqualToString:GETDATA]) {
        [sessionManager GET:[url absoluteString] parameters:requestParameters progress:^(NSProgress * _Nonnull downloadProgress) {
            
        } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
            NSLog(@"responseObject-------%@",responseObject);
            NSString *resultCode=NSValueToString(responseObject[RESULTCODE]);
            if (![Tool strIsNULL:resultCode]) {
                NSString *starStr=[resultCode substringToIndex:1];
                if ([starStr isEqualToString:LOGINOUT_CODE]) {
                    [self LoginOutWithCodeSixWith:responseObject[RESULTMSG]];//
                }else{
                    success(responseObject);
                }
            }
        } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
            NSLog(@"error-------%@",error);
            failure(error);
        }];
    }else if ([method isEqualToString:POSTDATA]){
        [sessionManager POST:[url absoluteString] parameters:requestParameters progress:^(NSProgress * _Nonnull uploadProgress) {
            
        } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
            NSLog(@"responseObject-------%@",responseObject);
            NSString *resultCode=NSValueToString(responseObject[RESULTCODE]);
            if (![Tool strIsNULL:resultCode]) {
                NSString *starStr=[resultCode substringToIndex:1];
                if ([starStr isEqualToString:LOGINOUT_CODE]) {
                    [self LoginOutWithCodeSixWith:responseObject[RESULTMSG]];//
                }else{
                    success(responseObject);
                }
            }
        } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
            NSLog(@"error-------%@",error);
            failure(error);
        }];
    }
}
#pragma mark-
#pragma mark--- 删除登录信息
-(void)LoginOutWithCodeSixWith:(NSString *)resultMsg
{
    //删除登录信息
//    [g_App requestLoginOut];
    
    UIAlertView *alert = [[UIAlertView alloc]
                          initWithTitle:@"提示"
                          message:resultMsg
                          delegate:self
                          cancelButtonTitle:@"知道了"
                          otherButtonTitles:nil, nil];
    alert.tag=AlertTag;
    [alert show];
    
}

#pragma mark-
#pragma mark--- Alert 点击事件
-(void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex{
    if (alertView.tag==AlertTag) {
//        LoginViewController * loginVC=[[LoginViewController alloc] initWithNibName:@"LoginViewController" bundle:nil];
//        OverRidesViewController *nav=[[OverRidesViewController alloc]initWithRootViewController:loginVC];
//        g_App.window.rootViewController=nav;
    }
}


-(void)showNetworkError:(NSError*)error
{
    NSString* errorString;
    if (error.code == NSURLErrorTimedOut)
    {
        errorString = @"网络请求超时，请稍后再试！";
        
        if (!isorError) {
            isorError=YES;
            UIAlertView * alertView=[[UIAlertView alloc]initWithTitle:@"温馨提示" message:errorString delegate:nil cancelButtonTitle:@"确定" otherButtonTitles:nil, nil];
            [alertView show];
        }

    }
    else if (error.code == NSURLErrorNotConnectedToInternet ||
             error.code == NSURLErrorCannotFindHost ||
             error.code == NSURLErrorCannotConnectToHost )
    {
        errorString = @"网络未连接，请打开网络";
        
        if (!isorError) {
            isorError=YES;
            UIAlertView * alertView=[[UIAlertView alloc]initWithTitle:@"温馨提示" message:errorString delegate:nil cancelButtonTitle:@"确定" otherButtonTitles:nil, nil];
            [alertView show];
        }

    }
    else
    {
        errorString =@"网络连接错误，请稍后再试";
    }
    
    
}

//-(void)cancelRequestWithUrl:(NSString*)urlString
//{
//    //    [self cancelAllHTTPOperationsWithMethod:nil path:urlString];
//    for (NSOperation *operation in [self.operationQueue operations]) {
//        if (![operation isKindOfClass:[AFHTTPRequestOperation class]]) {
//            continue;
//        }
//        
//        NSString *method = nil;
//        NSString *path = urlString;
//        if ((!method || [method isEqualToString:[[(AFHTTPRequestOperation *)operation request] HTTPMethod]]) && [path isEqualToString:[[[(AFHTTPRequestOperation *)operation request] URL] path]]) {
//            [operation cancel];
//        }
//    }
//}

-(void)cancelAllRequests
{
    [self.operationQueue cancelAllOperations];
}

- (void)reachability
{
    // 检测网络连接状态
    [[AFNetworkReachabilityManager sharedManager] startMonitoring];
    // 连接状态回调处理
    /* AFNetworking的Block内使用self须改为weakSelf, 避免循环强引用, 无法释放 */
    //    __weak typeof(self) weakSelf = self;
    [[AFNetworkReachabilityManager sharedManager] setReachabilityStatusChangeBlock:^(AFNetworkReachabilityStatus status)
     {
         NSString *netWorkStatus = @"";
         switch (status)
         {
             case AFNetworkReachabilityStatusUnknown:
                 
                 self.networkNotConnection=YES;
                 // 回调处理
                 break;
             case AFNetworkReachabilityStatusNotReachable:
                 self.networkNotConnection=YES;
                 netWorkStatus = @"无网络";
                 // 回调处理
                 break;
             case AFNetworkReachabilityStatusReachableViaWWAN:
                 self.networkNotConnection=NO;
                 netWorkStatus = @"手机自身网络";
                 // 回调处理
                 break;
             case AFNetworkReachabilityStatusReachableViaWiFi:
                 self.networkNotConnection=NO;
                 netWorkStatus = @"WiFi";
                 // 回调处理
                 break;
             default:
                 break;
         }
     }];
}


#pragma mark-
#pragma mark--- 头拼串
-(NSString *)splitWithDic:(NSMutableDictionary *)dic
{
    NSMutableArray *arr=[NSMutableArray array];
    for (id obj in [dic allKeys]) {
        NSString *str=[NSString stringWithFormat:@"%@=%@",obj,[dic objectForKey:obj]];
        [arr addObject:str];
    }
    
    NSSortDescriptor *descriptor = [NSSortDescriptor sortDescriptorWithKey:nil ascending:YES];
    NSArray *descriptors = [NSArray arrayWithObject:descriptor];
    NSArray *myDataArray = [NSArray arrayWithArray:arr];
    NSArray *resultArray = [myDataArray sortedArrayUsingDescriptors:descriptors];

    //    参数1=xxx&timestamp=xxx&。。。
    NSMutableString *str=[[NSMutableString alloc]init];
    
    for (int i=0; i<resultArray.count; i++) {
        if (i==resultArray.count-1) {
            [str appendString:resultArray[i]];
        }else{
            [str appendFormat:@"%@&",resultArray[i]];
        }
    }
    
//    NSSortDescriptor *descriptor = [NSSortDescriptor sortDescriptorWithKey:nil ascending:YES];
//    NSArray *descriptors = [NSArray arrayWithObject:descriptor];
//    NSArray *myDataArray = [NSArray arrayWithArray:[dic allKeys]];
//    NSArray *resultArray = [myDataArray sortedArrayUsingDescriptors:descriptors];
//    
//    //    参数1=xxx&timestamp=xxx&。。。
//    NSMutableString *str=[[NSMutableString alloc]init];
//    
//    int i=0;
//    
//    for (id obj in resultArray) {
//        id value=[dic objectForKey:obj];
//        i++;
//        if (i==dic.count) {
//            [str appendFormat:@"%@=%@",obj,value];
//        }else{
//            [str appendFormat:@"%@=%@&",obj,value];
//        }
//    }
//
    return str;
}
@end
